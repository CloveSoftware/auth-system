import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import { tokens } from "../../theme.js";
import * as yup from "yup"
import { useState } from "react";

const initialValues = {
    username: "",
    email: "",
    password: "",
    consent: false
};

const checkoutSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required"),
    username: yup.string().required("required"),
    consent: yup.bool().required("required")
});

export default function SignUp({ handleFormSubmit }) {
    const theme = useTheme();

    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": {
                                gridColumn: isNonMobile ? undefined : "span 4",
                            },
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            type="text"
                            label="Username"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.username}
                            name="email"
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 10", maxHeight: "52px" }}
                            color="secondary"
                        />

                        <TextField
                            fullWidth
                            variant="outlined"
                            type="email"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 10", maxHeight: "52px" }}
                            color="secondary"
                        />

                        <TextField
                            fullWidth
                            variant="outlined"
                            type="password"
                            label="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={touched.password && errors.password}
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 10" }}
                            color="secondary"
                        />

                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            sx={{ gridColumn: "span 10" }}
                        >
                            <Checkbox size="large" style={{marginLeft: -15}}/>
                            <Typography variant="body2" fontSize={"1rem"} width={"300px"}>
                                I am over the age of digital consent and agree to the
                                <Link href="#"> Terms of Service</Link> and <Link href="#">Privacy Policy</Link>
                            </Typography>

                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button
                            type="submit"
                            size="large"
                            fullWidth
                            style={{ backgroundColor: colors.green[500] }}
                            variant="contained"
                        >
                            {!isLoading ? (
                                "Sign Up"
                            ) : (
                                <ThreeDots
                                    height="20"
                                    width="20"
                                    radius="9"
                                    color="white"
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                />
                            )}
                        </Button>
                    </Box>
                    {errorMsg && (
                        <Typography
                            variant="h5"
                            color={colors.redAccent[500]}
                            textAlign="center"
                            fontWeight="300"
                            mt="15px"
                        >
                            {errorMsg}
                        </Typography>
                    )}
                </form>
            )}
        </Formik>
    )
}