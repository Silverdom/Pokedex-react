import { ReactNode } from "react";
import {
  LoaderFunctionArgs,
  defer,
  useLoaderData,
  Await as AwaitRouter,
  AwaitProps as AwaitRouterProps,
} from "react-router-dom";

export function deferredLoader<T extends Record<string, unknown>>(
  datafunction: (args: LoaderFunctionArgs) => T
) {
  return (args: LoaderFunctionArgs) => {
    return defer(datafunction(args)) as Omit<
      ReturnType<typeof defer>,
      "data"
    > & {
      data: T;
    };
  };
}

export function useDeferredLoaderData<
  T extends ReturnType<typeof deferredLoader>
>() {
  return useLoaderData() as ReturnType<T>["data"];
}

export function useGenericLoaderData<T>() {
  return useLoaderData() as T;
}

export function genericLoader() {}

type ModifiedAwaitResolveRenderFunction<T> = (data: T) => ReactNode;
// type ModifiedAwaitResolveRenderFunction<T> = (data: Awaited<T>) => ReactNode;

type ModifiedAwaitProps<T> = Omit<AwaitRouterProps, "resolve" | "children"> & {
  resolve: Promise<T>;
  children: ReactNode | ModifiedAwaitResolveRenderFunction<T>;
};

export function Await<T>(props: ModifiedAwaitProps<T>) {
  return <AwaitRouter {...props} />;
}
