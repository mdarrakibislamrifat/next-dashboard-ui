"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
    />
  );
};

export default BigCalendar;
