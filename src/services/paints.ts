// Need to use the React-specific entry point to import createApi
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ImageData } from "../redux/slices/authorsSelectSlice";

// Define a service using a base URL and expected endpoints
export const firebaseApi = createApi({
  //   reducerPath: 'pokemonApi',
  reducerPath: "firebaseApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getDataFromFirebase: build.query<ImageData[], void>({
      async queryFn() {
        try {
          //   const result = getDocs(collection(db, "paints")); // call firebase here
          //   return { data: result }

          const blogRef = collection(db, "paints");
          const querySnaphot = await getDocs(blogRef);
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
    }),
    setDataToFirebase: build.mutation({
      async queryFn({ userName, img }) {
        try {
          await addDoc(collection(db, "paints"), {
            author: userName,
            url: img,
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
    }),
  }),
});

export const { useGetDataFromFirebaseQuery, useSetDataToFirebaseMutation } =
  firebaseApi;
