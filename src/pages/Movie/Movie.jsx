import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../redux/movieSlice'
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Box, Button, Checkbox, Modal } from '@mui/material';
import MovieForm from '../../components/MovieForm';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import imgNotFound from '../../assets/not-fount.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const Movie = () => {
    const dispatch = useDispatch();
    const { movies, moviesLoading } = useSelector((state) => state.movies);

    const [selectedRows, setSelectedRows] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleReloadMovieList = () => {
        dispatch(fetchMovies());
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await Promise.all(selectedRows.map(id => axios.delete(`${id}`)));
                    dispatch(fetchMovies());
                    setSelectedRows([]);
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } catch (error) {
                    console.error("Failed to delete movies", error);
                }
            }
        })
    };


    useEffect(() => {
    }, [selectedRows]);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch])


    const columns = [
        {
            field: ' ',
            headerName: '',
            width: 50,
            sortable: false,
            filterable: false,
            renderCell: (params) => {
                return (
                    <div>
                        <Checkbox
                            color="primary"
                            checked={selectedRows.includes(params.id)}
                            onChange={(event) => handleClick(event, params.id)}
                        />
                    </div>
                );
            }
        },
        { field: 'id', headerName: 'ID' },
        {
            field: 'poster_path', headerName: 'Poster', width: 150, renderCell: (params) => {
                return (
                    <div>

                        <img
                            className='h-16 w-16 rounded-md object-cover object-top'

                            src={
                                params.row.poster_path
                                    ? `https://image.tmdb.org/t/p/w220_and_h330_face${params.row.poster_path}`
                                    : `${imgNotFound}`
                            }
                            alt="Poster"
                        />
                    </div>
                );
            }
        },

        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'release_date', headerName: 'Release Date', width: 150, },
        {
            field: 'overview',
            headerName: 'Body Text',
            width: 850,
        },
        {
            field: 'actions', headerName: 'Actions', headerAlign: 'right', width: 175, sortable: false, renderCell: (params) => {
                return (
                    <div className='d-flex justify-content-end w-full text-end'>
                        <Link to={`/movie/${params.row.id}`} className="p-3  h-10 w-24 text-blue-500 rounded-full border-blue-500 border transition-all hover:bg-blue-500 hover:text-white">
                            <ArrowOutwardIcon className='mr-1' />
                            Details
                        </Link>

                    </div>
                );
            }
        }

    ];


    const handleClick = (event, id) => {
        if (event.target.checked) {
            setSelectedRows((prev) => [...prev, id]);
        } else {
            setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
        }
    };

    return (
        <div>
            <div>
                <Button variant="contained" onClick={handleOpen}>
                    <AddIcon className='mr-1' />
                    Add Movie
                </Button>
                <Button onClick={handleDelete} variant="contained" color="error" sx={{ ml: 2 }} disabled={selectedRows.length === 0}>
                    <DeleteSweepIcon className='mr-1' />
                    Delete
                </Button>
            </div>

            <DataGrid
                loading={moviesLoading}
                className='mt-5 data-table-container'
                getRowHeight={() => 100}
                rows={movies}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <MovieForm handleClose={handleClose} handleReloadMovieList={handleReloadMovieList} />
                </Box>
            </Modal>
        </div>
    )
}

export default Movie


