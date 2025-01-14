// Need to use the React-specific entry point to import createApi
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ImageData } from "../interfaces/slices";

// Define a service using a base URL and expected endpoints
export const firebaseApi = createApi({
  tagTypes: ["Images"],
  reducerPath: "firebaseApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getDataFromFirebase: build.query<ImageData[], void>({
      async queryFn() {
        try {
          const paintsRef = collection(db, "paints");
          const querySnaphot = await getDocs(paintsRef);
          const paints: ImageData[] = [];
          querySnaphot.forEach((doc) => {
            const data = doc.data();
            paints.push({ author: data.author, url: data.url, id: doc.id });
          });
          return { data: paints };
        } catch (e) {
          return { error: e };
        }
      },
      providesTags: ["Images"],
    }),
    setDataToFirebase: build.mutation({
      async queryFn({ userName, img, id }) {
        try {
          await addDoc(collection(db, "paints"), {
            author: userName,
            url: img,
            id: id
          });
          return { data: null };
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (error: any) {
          if (error instanceof Error) {
            return { error: error.message };
          }
          return error;
        }
      },
      invalidatesTags: ["Images"],
    }),
  }),
});

export const { useGetDataFromFirebaseQuery, useSetDataToFirebaseMutation } =
  firebaseApi;
