import moment from "moment";
import { useEffect, useState } from "react";
import { HStack, VStack, Text, ProgressRoot, Progress } from "@chakra-ui/react";

export const Home: React.FC = () => {
    const [complete, setComplete] = useState(false);
    const [remainingTime, setRemainingTime] = useState(moment.duration());
    const dueDateTime = moment("2025-03-01");

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDelta = dueDateTime.valueOf() - currentTime;

            if (timeDelta <= 0) setComplete(true);
            else setRemainingTime(moment.duration(timeDelta));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [remainingTime, dueDateTime]);
    return (
        <VStack w="100vw" h="100vh" justifyContent="center" alignItems="center" backgroundColor="black">
            <HStack gap="3" color="white">
                <HStack alignItems="end">
                    <Text fontSize="4xl">{Math.round(remainingTime?.asDays())}</Text>
                    <Text>дней</Text>
                </HStack>
                <HStack alignItems="end">
                    <Text fontSize="4xl">{Math.round(remainingTime?.hours())}</Text>
                    <Text>часов</Text>
                </HStack>
                <HStack alignItems="end">
                    <Text fontSize="4xl">{Math.round(remainingTime?.minutes())}</Text>
                    <Text>минут</Text>
                </HStack>
                <HStack alignItems="end">
                    <Text fontSize="4xl">{Math.round(remainingTime?.seconds())}</Text>
                    <Text>секунд</Text>
                </HStack>
            </HStack>
        </VStack>
    );
};
