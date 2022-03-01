import React, { Suspense } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Player from '../components/Player'
import Test from '../components/Test'
import { Canvas } from "react-three-fiber";
import Model from "../components/Model";
import LicensingInfo from "../components/LicensingInfo";
import SplashScreen from "../components/SplashScreen";
import ContactSnip from "../components/ContactSnip";

export default function Home() {
  return (
    <>
    <SplashScreen/>
    <Hero/>
    <Player />
   
    <LicensingInfo/>
    <ContactSnip/>
    

    
    </>
  )
}
