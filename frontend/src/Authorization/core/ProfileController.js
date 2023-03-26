import { Box, Button, Grid, TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetProfileQuery } from "../../features/profile/profileGetApiSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddProfileMutation } from "../../features/profile/profileAddApiSlice";

export const ProfileController = ({ open, onClose }) => {
  const { data: users } = useGetProfileQuery(open);
  const [addProfile] = useAddProfileMutation();

  const [phoneNumber, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setFirstName(users?.response.user?.first_name);
    setLastName(users?.response.user?.last_name);
    setEmail(users?.response.user?.email);
    setUserName(users?.response.user?.username);
    setPhone(users?.response.phone);
  }, [open]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const phone = phoneNumber;
      let user = {
        email: email,
        last_name: lastName,
        first_name: firstName,
      };
      addProfile({ phone, user });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Profile"}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  value={phoneNumber}
                  onChange={(e) => setPhone(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last NAme"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} type="submit">Save</Button>
          <Button onClick={onClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
