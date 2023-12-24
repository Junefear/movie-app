import * as Yup from "yup"

export const mavieValidation = Yup.object().shape({
    title: Yup.string().trim()
        .required("Title is required.")
        .min(5, "Title must be at least 5 characters."),
    original_language: Yup.string()
        .required("Tagline is required.")
        .min(2, "Tagline must be at least 2 characters.")
        .max(3, "Tagline must not exceed 20 characters."),
    popularity: Yup.number()
        .required("Popularity is required.")
        .transform((value, originalValue) => typeof originalValue === 'string' && originalValue.trim() === "" ? undefined : value)
        .min(3, "Popularity must be at least 3."),
    overview: Yup.string()
        .required("Overview is required.")
        .min(5, "Overview must be at least 5 characters."),
});