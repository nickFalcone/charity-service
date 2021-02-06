# Charity service

Simple Node Express service to return charities from the [Charity Navigator API](https://charity.3scale.net/). Hosted on Google Cloud.

## URL parameters

```
http://localhost:8080/?search=charlotte&rated=1
```

`search`: Query term (string)
`rated`: (integer)
- `1` Only return rated charities
- `2` Return rated and unrated charities

## Development

```bash
git clone git@github.com:nickFalcone/charity-service.git

cd charity-service/

npm install --save-dev

npm run start # local development at http://localhost:8080

# Assumes Google Cloud SDK installed https://cloud.google.com/sdk/docs/install

$ gcloud -v
# Google Cloud SDK 326.0.0
# bq 2.0.64
# core 2021.01.29
# gsutil 4.58

gcloud app deploy # deploy to gcloud
```