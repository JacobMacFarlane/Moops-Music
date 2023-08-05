import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '1076e34188mshefd8ed48460a24cp1bbe33jsnb9eb5ceb8692');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`}),

        }),
    })

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi