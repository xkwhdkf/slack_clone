import { Dispatch, SetStateAction, useCallback, useState } from "react"

const useInput = <T = any>(initialDate: T): [T, (e:any) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialDate);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  },[])
  return [value, handler,setValue];
};

export default useInput;