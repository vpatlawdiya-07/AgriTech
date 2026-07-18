import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import Loader from "../components/ui/Loader";
import PageHeader from "../components/ui/PageHeader";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardStats from "../components/dashboard/DashboardStats";
import QuickActions from "../components/dashboard/QuickActions";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import WeatherCard from "../components/dashboard/WeatherCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import RecentActivity from "../components/dashboard/RecentActivity";

import { Grid } from "@mui/material";

import { getLatestSensor } from "../api/sensorApi";
import { getWeather } from "../api/weatherApi";
import { getRecommendation } from "../api/recommendationApi";

export default function Dashboard() {

    const [sensor, setSensor] = useState(null);
    const [weather, setWeather] = useState(null);
    const [recommendation, setRecommendation] = useState(null);

    const loadData = async () => {

        try {

            const sensorRes = await getLatestSensor();

            setSensor(sensorRes.data.data);

            const weatherRes = await getWeather();

            setWeather(weatherRes.data.data.current);

            const recommendationRes =
                await getRecommendation();

            setRecommendation(
                recommendationRes.data.recommendation
            );

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadData();

        const interval = setInterval(() => {

            loadData();

        }, 5000);

        return () => clearInterval(interval);

    }, []);

    if (
        !sensor ||
        !weather ||
        !recommendation
    ) {

        return (

            <MainLayout>

                <Loader
                    text="Loading Smart Dashboard..."
                    fullScreen={false}
                />

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <PageHeader
                title="Smart Agriculture Dashboard"
                subtitle="Monitor live soil sensor readings, weather insights and AI recommendations."
            />

            <WelcomeBanner
                weather={weather}
                onAddFarm={() => {
                    console.log("Navigate to Add Farm");
                }}
            />

            <DashboardStats
                sensor={sensor}
            />

            <QuickActions />

            <DashboardCharts
                sensor={sensor}
            />

            <Grid
                container
                spacing={3}
                mt={1}
            >

                <Grid
                    item
                    xs={12}
                    lg={6}
                >

                    <WeatherCard
                        weather={weather}
                    />

                </Grid>

                <Grid
                    item
                    xs={12}
                    lg={6}
                >

                    <RecommendationCard
                        recommendation={
                            recommendation
                        }
                    />

                </Grid>

            </Grid>
                        <RecentActivity />

        </MainLayout>

    );

}