"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";

type FormValues = {
  title: string;
  detail: string;
  imageUrl?: FileList;
};

const schema: ZodType<FormValues> = z.object({
  title: z.string().min(1, "title required"),
  detail: z.string().min(1, "detail required"),
  imageUrl: z.any(),
});



const AddBlogPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });
  

  const submitData = (values: FormValues) => {
    setLoading(true);
    // console.log(values);
    if (
      values.imageUrl &&
      values.imageUrl[0] &&
      values.imageUrl[0].size > 2000000
    ) {
      setLoading(false);
      return setAddError("max image size exceeded");
    }
    // console.log(values && values.file_upload[0].size);

    let formdata = new FormData();
    formdata.append("title",values.title);
    formdata.append("detail", values.detail);

    if (values.imageUrl && values.imageUrl[0]) {
      formdata.append("file_upload", values.imageUrl[0]);
    }

    // your api request here
  };

  return (
    <div className=" my-10">
    <div className="">
      <form onSubmit={handleSubmit(submitData)} className="max-w-lg mx-auto">
        <section className="grid grid-cols-1  px-5 gap-x-5 gap-y- max-w-2xl">
          <div className="grid gap-y-3">
            <label htmlFor="title" className="capitalize pl-3 lightText">
              Title *
            </label>
            <input
              {...register("title")}
              placeholder="title"
              name="title"
              id="title"
              className="w-full rounded-full"
              type="text"
            />
            {errors?.title && (
              <small className="text-red-500 pl-2">
                {errors.title.message}
              </small>
            )}
          </div>
          <div className="grid w-full h-min">
            <label htmlFor="detail" className="text-lg font-medium">
              Detail *
            </label>
            <textarea
              {...register("detail")}
              className="rounded-md h-20"
            ></textarea>
            {errors?.detail && (
              <small className="text-red-500 pl-2">
                {errors.detail.message}
              </small>
            )}
          </div>

          <div className="grid gap-y-1 mt-2">
            <label htmlFor="imageUrl" className="capitalize pl-3 lightText">
              Image
              <span className="text-red-500">max size 2mb</span>
            </label>
            <input
              {...register("imageUrl")}
              placeholder="Payment Proof Image"
              name="imageUrl"
              id="imageUrl"
              className="w-full"
              type="file"
              accept="image/*"
              required
            />
            {addError !== "" ? (
              <small className="text-red-500 pl-2">{addError}</small>
            ) : null}

            {errors?.imageUrl && (
              <small className="text-red-500 pl-2">
                {errors?.imageUrl?.message || ""}
              </small>
            )}
          </div>
        </section>
        <div className="flex items-center justify-center mt-7 max-w-2xl">
          <button
            type="submit"
            className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-2"
          >
            <span>Submit</span>
            {/* <span className="text-white">{loading ? <Spinner /> : null}</span> */}
          </button>
        </div>
      </form>
    </div></div>
  );
};

export default AddBlogPost;
