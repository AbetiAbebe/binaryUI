export interface Environment {
  production: boolean;
  name: string;
  api_url: string;
  urls: {
    api : string
    report : string;
  }
}
