import { useState, useEffect } from "react";

type Props = {
  afterEnd: () => void
}
export const ProgressBar = ({ afterEnd }: Props) => {
  const [progress, setProgress] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    for (let i = 0; i < 101; i++) {
      setTimeout(() => {
        setProgress(i);
      }, 100 * i);
    }
    setTimeout(() => {
      afterEnd();
      setShowMessage(true);
    }, 100 * 100);
  }, [])

  return <div className="mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600">
    <div className="h-5 bg-green-500" style={{ width: `${progress}%` }}></div>
    {showMessage && <div className=""> {"Успішно відновлено"} </div>}
  </div>
}
