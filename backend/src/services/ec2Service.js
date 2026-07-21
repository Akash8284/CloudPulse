import dotenv from "dotenv";
dotenv.config();

import {
    EC2Client,
    DescribeInstancesCommand,
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function getEC2Instances() {
    try {
        const data = await ec2.send(new DescribeInstancesCommand({}));

        let instances = [];

        data.Reservations.forEach((reservation) => {
            reservation.Instances.forEach((instance) => {
                instances.push({
                    id: instance.InstanceId,
                    state: instance.State.Name,
                    type: instance.InstanceType,
                    publicIp: instance.PublicIpAddress || "N/A",
                    privateIp: instance.PrivateIpAddress || "N/A",
                    launchTime: instance.LaunchTime,
                });
            });
        });

        return {
            success: true,
            total: instances.length,
            running: instances.filter(i => i.state === "running").length,
            stopped: instances.filter(i => i.state === "stopped").length,
            instances,
        };

    } catch (err) {
        return {
            success: false,
            error: err.message,
        };
    }
}