import { CloudWatchClient, ListMetricsCommand } from "@aws-sdk/client-cloudwatch";
import dotenv from "dotenv";

dotenv.config();

const client = new CloudWatchClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const testCloudWatchConnection = async () => {
  try {
    const command = new ListMetricsCommand({
      MaxRecords: 5,
    });

    const response = await client.send(command);

    return {
      success: true,
      metricsFound: response.Metrics?.length || 0,
      metrics: response.Metrics || [],
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};