import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/Store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const createThunk = <ReturnValue, ArgType>(
  typePrefix: string,
  fn: AsyncThunkPayloadCreator<
    ReturnValue, 
    ArgType, 
    {
      dispatch: AppDispatch;
      state: RootState;
    }
  >
) => createAsyncThunk(typePrefix, fn);