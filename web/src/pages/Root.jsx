import { Box, Button, Typography, useTheme } from "@mui/material";
import Login from "./Root/Login.jsx";
import { tokens } from "../theme.js";
import Logo from "../components/branding/Logo.jsx";
import { useState } from "react";
import SignUp from "./Root/SignUp.jsx";

export default function Root() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="content"
      style={{
        paddingTop: "6rem",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        backgroundColor={colors.black[400]}
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="15px"
        pt="40px"
      >
        <Logo />
        <Typography
          variant="h4"
          color={colors.green[500]}
          fontWeight="400"
          mt="15px"
        >
          &lt; ref domain goes here &gt;
        </Typography>
        <Box m="20px" mt="40px" maxWidth="500px">
          {isLogin ? <Login /> : <SignUp />}
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() => {setIsLogin(prev => !prev)}}
            style={{marginTop: "0.75rem"}}
          >
            {isLogin ? "Need an account ?" : "Have an account ?"}
          </Button>
        </Box>
      </Box>
    </main>
  )
}