import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';

const client = new SecretsManagerClient({
  region: 'ap-south-1',
});

export async function getDbSecret() {
  const command = new GetSecretValueCommand({
    SecretId: 'mysql-nest-devops',
  });

  const response = await client.send(command);

  if (!response.SecretString) {
    throw new Error('SecretString is empty');
  }

  return JSON.parse(response.SecretString);
}

