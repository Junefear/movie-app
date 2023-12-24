/* eslint-disable react/prop-types */
import axios from "axios";
import { Fragment, useState } from "react";
import { mavieValidation } from "../Validation/movieValidation";
import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import Swal from 'sweetalert2';

export default function MovieForm({
    id,
    title: existingTitle,
    popularity: existingPopularity,
    overview: existingOverview,
    original_language: existingLang,
    poster_path: existingPoster,
    release_date: existingReleaseDate,
    handleClose,
    handleReloadMovieList
}) {
    const [title, setTitle] = useState(existingTitle || "");
    const [popularity, setPopularity] = useState(existingPopularity || "");
    const [overview, setOverview] = useState(existingOverview || "");
    const [original_language, setLanguage] = useState(existingLang || "");
    const [poster_path, setPoster] = useState(existingPoster || "");
    const [release_date, setRelease] = useState(existingReleaseDate || "");

    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    async function onSubmit(data) {
        setLoading(true);

        try {
            const requestData = id ? { ...data, id } : { ...data, id: Date.now(), release_date: getFormattedDate() };
            const delay = id ? 2000 : 1000; // loadinglerin görünmesi için settimeout eklendi.

            await new Promise(resolve => {
                setTimeout(async () => {
                    let response;
                    if (id) {
                        response = await axios.put(`${id}`, requestData);
                        navigate('/');
                    } else {
                        try {
                            response = await axios.post(``, requestData);
                            handleClose();
                            reset();
                            handleReloadMovieList();
                            Swal.fire(
                                'Added!',
                                'Your movie has been added.',
                                'success'
                            )
                        } catch (error) {
                            console.error("Failed to add movie", error);
                        }
                    }
                   
                    resolve();
                }, delay);
            });
        } catch (error) {
            console.error("An error occurred while updating the movie:", error);
        } finally {
            setLoading(false);
        }
    }

    function getFormattedDate() {
        const today = new Date();
        return `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
    }


    const { register, control, handleSubmit, formState: { errors }, reset
    } = useForm({
        resolver: yupResolver(mavieValidation),
        defaultValues: {
            title: title,
            original_language: original_language,
            popularity: popularity,
            overview: overview,
            poster_path: poster_path,
            release_date: release_date,
        }
    });



    return (
       
            <Fragment style={{boxShadow:"none", padding:"0"}}>
                    <Box px={3} py={2} style={{boxShadow:"none", padding:"0"}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        id="title"
                                        name="title"
                                        label="Title"
                                        type="text"
                                        fullWidth
                                        margin="dense"
                                        {...register("title", {
                                            setValueAs: value => value.trim()
                                        })}
                                        error={errors.title ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.title?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        id="original_language"
                                        name="original_language"
                                        type="text"
                                        label="Language"
                                        fullWidth
                                        margin="dense"
                                        {...register("original_language")}
                                        error={errors.original_language ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.original_language?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        id="popularity"
                                        name="popularity"
                                        label="Popularity"
                                        fullWidth
                                        type="number"
                                        margin="dense"
                                        {...register("popularity")}
                                        error={errors.popularity ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.popularity?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        id="overview"
                                        name="overview"
                                        label="Overview"
                                        type="text"
                                        fullWidth
                                        margin="dense"
                                        {...register("overview")}
                                        error={errors.overview ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.overview?.message}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box mt={3}>

                                <LoadingButton loading={loading} type="submit" variant="contained" color="primary">
                                    Update
                                </LoadingButton>
                            </Box>
                        </form>
                    </Box>
            
            </Fragment>
       
    )
}

