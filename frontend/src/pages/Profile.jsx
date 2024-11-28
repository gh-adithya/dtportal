import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Box,
  Divider,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  Edit as EditIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Cake as BirthdayIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Profile = () => {
  const profileData = {
    name: "Sample User",
    email: "sample@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "March 15, 1988",
    address: "BITS Pilani, Goa Campus",
    avatarUrl: "frontend/public/avatar.png", // Replace with actual path if available
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 800, margin: "auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            elevation={3}
            sx={{
              position: "relative",
              borderRadius: 3,
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Avatar
                  alt={profileData.name}
                  src={profileData.avatarUrl}
                  sx={{
                    width: 120,
                    height: 120,
                    border: "4px solid white",
                    boxShadow: 3,
                  }}
                />
                <Box sx={{ ml: 3 }}>
                  <Typography variant="h4" gutterBottom>
                    {profileData.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Patient
                  </Typography>
                </Box>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "primary.main",
                  }}
                >
                  <EditIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 3,
              background: "white",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {[
                {
                  icon: <EmailIcon />,
                  primary: "Email",
                  secondary: profileData.email,
                },
                {
                  icon: <PhoneIcon />,
                  primary: "Phone",
                  secondary: profileData.phone,
                },
                {
                  icon: <BirthdayIcon />,
                  primary: "Birthday",
                  secondary: profileData.birthday,
                },
                {
                  icon: <LocationIcon />,
                  primary: "Address",
                  secondary: profileData.address,
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        color: "primary.main",
                        mr: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <div>
                      <Typography variant="subtitle1">
                        {item.primary}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.secondary}
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
