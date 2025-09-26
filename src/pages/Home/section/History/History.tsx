import Button from "@/components/Button/Button";
import styles from "./History.module.scss";
import { bindClass } from "@/utils/classnames";
import { Image } from "@/assets/images/image";
import { useLayoutEffect, useRef, useState } from "react";

const c = bindClass(styles);

function History() {
  const [eventHeight, seteventHeight] = useState<number>(0);
  const [currentEvent, setCurrentEvent] = useState<number>(0);
  const timeLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (timeLineRef.current) {
      seteventHeight(timeLineRef.current.offsetHeight / 3);
    }
  }, []);

  useLayoutEffect(() => {
    if (!timeLineRef.current) return;

    /* Logic:
      - cho event mục tiêu ra chính giữa (event là các năm)
      -> lấy chiều cao của (container) chia 2 đồng thời triệt tiêu offsettop của event hiện tại
    */
    const items = timeLineRef.current!.children[0].children;
    const currentItem = items[currentEvent] as HTMLDivElement;

    const itemOffsetTop = currentItem.offsetTop + currentItem.offsetHeight / 2;
    const timeLineOffset = timeLineRef.current!.offsetHeight / 2;

    const transY = timeLineOffset - itemOffsetTop;

    // reset style
    Array.from(items).forEach((i) => {
      (i as HTMLDivElement).style.color = "black";
      Array.from((i as HTMLDivElement).children).forEach((c) => {
        (c as HTMLDivElement).style.transform = "scale(1)";
      });
    });

    // current style
    currentItem.style.color = "var(--color-primary)";
    Array.from((currentItem as HTMLDivElement).children).forEach((d) => {
      (d as HTMLDivElement).style.transform = "scale(1.2)";
    });

    (
      timeLineRef.current!.children[0] as HTMLDivElement
    ).style.transform = `translateY(${transY}px)`;
  }, [currentEvent, eventHeight]);

  const goPrev = () => {
    setCurrentEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentEvent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const events = [
    {
      year: "2008",
      title: "Thành lập trường",
      desc: "Trường chính thức được thành lập và khai giảng khóa học đầu tiên, đánh dấu bước khởi đầu quan trọng trong hành trình giáo dục của mình",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Congtruong.JPG",
    },
    { year: "2012", title: "Khởi chương trình mới", desc: "..." },
    { year: "2018", title: "Mở rộng đào tạo", desc: "..." },
    { year: "2022", title: "Đạt thành tựu lớn", desc: "..." },
    { year: "2025", title: "Kế hoạch tương lai", desc: "..." },
  ];

  return (
    <div className={c("history", "container-fluid")}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col">
              <div className={c("timeline")} ref={timeLineRef}>
                <div className={c("inner")}>
                  {events?.map((e, i) => (
                    <div
                      key={i}
                      className={c("event", "ms-5", "")}
                      style={{
                        height: `${eventHeight}px`,
                      }}
                    >
                      <div className={c("content")}>
                        <div className={c("year")}>{e.year}</div>
                        <div className={c("desc")}>{e.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={c(
                  "detail",
                  "d-flex",
                  "flex-column",
                  "align-item-center",
                  "justify-content-center",
                  "h-100"
                )}
              >
                <div className={c("title")}>{events[currentEvent].title}</div>
                <div className={c("desc")}>{events[currentEvent].desc}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className={c("image")}>
            <Image
              src={events[currentEvent].image}
              ratio="652/435"
              // width="80%"
              className={c("item")}
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <Button label="<" onClick={goPrev} color="primary" />
        <Button label=">" onClick={goNext} color="primary" />
      </div>
    </div>
  );
}

export default History;
