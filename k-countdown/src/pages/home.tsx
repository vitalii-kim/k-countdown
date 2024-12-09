import moment from "moment";
import { useEffect, useState } from "react";
import { HStack, VStack, Text, Stack } from "@chakra-ui/react";
import bgImage from "../components/kolyakolya.webp";

export const Home: React.FC = () => {
    //deploy
    const [complete, setComplete] = useState(false);
    const [remainingDays, setRemainingDays] = useState(0);
    const [remainingHours, setRemainingHours] = useState(0);
    const [remainingMinutes, setRemainingMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    const dueDateTime = moment("2025-03-01");

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDelta = dueDateTime.valueOf() - currentTime;

            if (timeDelta <= 0) setComplete(true);
            else {
                const remainingTime = moment.duration(timeDelta);
                setRemainingDays(remainingTime?.asDays());
                setRemainingHours(remainingTime.hours());
                setRemainingMinutes(remainingTime.minutes());
                setRemainingSeconds(remainingTime.seconds());
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [dueDateTime]);

    return (
        <VStack
            w="100vw"
            h="100vh"
            p={5}
            justifyContent="end"
            alignItems="flex-start"
            bgAttachment="fixed"
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.127),rgba(0, 0, 0, 0.5)),url(${bgImage})`}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos="center"
            bgColor="blackAlpha.100"
        >
            <Stack flexDirection={{ base: "column", lg: "row" }} gap="3" color="whiteAlpha.700" fontWeight="bold">
                <HStack alignItems="end">
                    <Text fontSize="6xl">{Math.round(remainingDays)}</Text>
                    <Text>{remainingDays === 1 ? "day" : "days"}</Text>
                </HStack>
                <HStack alignItems="end">
                    <Text fontSize="6xl">{remainingHours}</Text>
                    <Text>{remainingHours === 1 ? "hour" : "hours"}</Text>
                </HStack>
                <HStack alignItems="end">
                    <Text fontSize="6xl">{remainingMinutes}</Text>
                    <Text>{remainingMinutes === 1 ? "minute" : "minutes"}</Text>
                </HStack>
                <HStack alignItems="end">
                    <Text fontSize="6xl">{remainingSeconds}</Text>
                    <Text>{remainingSeconds === 1 ? "second" : "seconds"}</Text>
                </HStack>
            </Stack>
        </VStack>
    );
};
