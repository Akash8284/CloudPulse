import { getEC2Instances } from "./ec2Service.js";

export async function getDashboardData() {
    const ec2 = await getEC2Instances();

    return {
        success: true,

        ec2: {
            total: ec2.total,
            running: ec2.running,
            stopped: ec2.stopped,
            instances: ec2.instances,
        },

        lambda: {
            total: 0
        },

        s3: {
            total: 0
        },

        cost: 0,

        health: ec2.running > 0 ? 100 : 0
    };
}