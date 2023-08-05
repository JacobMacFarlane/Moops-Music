import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '1076e34188mshefd8ed48460a24cp1bbe33jsnb9eb5ceb8692');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/v1/charts/world' }),
            getSongDetails: builder.query({ query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`}),
            getSongRelated: builder.query({ query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`}),
            getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
        }),
    })

    export const {
        useGetSongsByCountryQuery,
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery
    } = shazamCoreApi