"use client";
import Head from "next/head";
import { Inter } from "next/font/google"; //TODO: replace with font
import Feed from "./feed/page";
import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-Slice";
import {TextField, Button, Container, Typography} from '@mui/material';
import { useDispatch } from "react-redux";
import {useAppSelector} from "@/redux/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../../server/firebase";

const inter = Inter({ subsets: ["latin"]  });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const username = useAppSelector((state)=> state.authReducer.value.username);
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(logIn({username: email, password}))
    router.push('/home')
    console.log('Logging in with:', { email, password });
  };

  return (
    <div>
      <Head>
        <title>Badger</title>
        <meta name="description" content="food sharing challenge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: might change to Login below */}
      <Container maxWidth="large"  sx={{
        backgroundColor: '#fdfbf2', // Set the background color to cream
        height: '100vh',
        padding: '2rem', // Add padding for spacing inside the container
        borderRadius: '8px', // Optional: Add border radius for rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add box shadow for depth
      }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <Typography variant="h6" style={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <Link href="/signup">
          <p style={{ textDecoration: 'none', color: 'blue' }}>Sign up</p>
        </Link>
      </Typography>
    </Container>
    </Container>
    <h1> Username: {username}</h1>
    </div>
  );
}
