import * as React from 'react';
import cn from "classnames";
import styles from "./index.module.css";
import { FadeIn } from '../home-shared/FadeIn';
import Head from 'next/head';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FeatureSection from './FeatureSection';
import PricingSection from './PricingSection';
import ScreenSection from './ScreenSection';


export default function LandingPage() {
    return (
        <>
            <Head>
                <title>NicePhoto</title>
            </Head>
            <HeroSection />
            <ContentSection />
            <FeatureSection />
            <ScreenSection />
            {/* <PricingSection /> */}
        </>
    );


}
