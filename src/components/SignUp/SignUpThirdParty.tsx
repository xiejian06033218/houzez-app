import "./SignUp";
import { Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import GoogleLogo from "../../assets/icon/google_icon.png";
import FacebookLogo from "../../assets/icon/facebook_icon.png";
import AppleLogo from "../../assets/icon/apple_icon.png";

const {
  palette: {
    secondary: { light, main, dark }
  }
} = theme;

const SignUpThirdpartyButton = styled(Button)({
  borderRadius: "3px",
  fontSize: "0.9rem",
  fontWeight: "400",
  height: "50px",
  paddingTop: "10px",
  "&::before": {
    content: `""`,
    position: "absolute",
    left: "15px",
    top: "13px",
    height: "24px",
    width: "24px"
  }
});

const SignUpThirdpartyButtonGoogle = styled(SignUpThirdpartyButton)({
  color: dark,
  borderColor: main,
  "&:hover": {
    borderColor: dark,
    backgroundColor: light
  },
  "&::before": {
    backgroundImage: `url(${GoogleLogo.src})`
  }
});

const SignUpThirdpartyButtonFacebook = styled(SignUpThirdpartyButton)({
  "&::before": {
    backgroundImage: `url(${FacebookLogo.src})`
  }
});

const SignUpThirdPartyButtonApple = styled(SignUpThirdpartyButton)({
  backgroundColor: dark,
  "&:hover": {
    backgroundColor: dark
  },
  "&::before": {
    backgroundImage: `url(${AppleLogo.src})`
  }
});

const SignUpThirdParty = () => {
  return (
    <Stack spacing={2} direction="column" width="100%" mt="15px">
      <SignUpThirdpartyButtonGoogle variant="outlined">continue with Google</SignUpThirdpartyButtonGoogle>
      <SignUpThirdpartyButtonFacebook variant="contained">continue with facebook</SignUpThirdpartyButtonFacebook>
      <SignUpThirdPartyButtonApple variant="contained">continue with apple</SignUpThirdPartyButtonApple>
    </Stack>
  );
};

export default SignUpThirdParty;
