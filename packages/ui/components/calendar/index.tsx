"use client";

import React from "react";
import { DayPicker } from "react-day-picker";
// import { ko } from "date-fns/locale";

import { ChevronLeft, ChevronRight } from "@repo/icons";
import { cn } from "@repo/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({ className, classNames, ...props }: CalendarProps) => (
  <DayPicker
    // locale={ko} 
    showOutsideDays  
    className={cn(
      "calendar relative border border-solid border-gray-100 shadow select-none",
      className
    )}
    classNames={{
      months: "calendar-months flex flex-col gap-2",
      month: "calendar-month relative space-y-4",
      caption:
        "calendar-caption relative flex justify-center p-[4px] items-center",
      caption_label:
        "calendar-caption_label text-[18px] text-text_color font-bold ",
      nav: "calendar-nav space-x-1 flex items-center bg-green-500",
      nav_button:
        "calendar-nav_button h-[40px] w-[40px] bg-transparent p-0 text-text_color opacity-50 hover:opacity-100",
      nav_button_previous:
        "calendar-nav_button_previous absolute left-0 text-text_color",
      nav_button_next:
        "calendar-nav_button_next absolute right-0 text-text_color",

      table: "calendar-table w-full border-collapse",
      head_row: "calendar-head_row px-[5px] flex",
      head_cell:
        "calendar-head_cell p-[4px] inline-flex flex-1 justify-center items-center",
      row: "calendar-row px-[5px] w-full flex",
      cell: "calendar-cell flex-1 inline-flex min-h-[40px]",
      day: "calendar-day w-full h-full",
      day_range_end: "calendar-day-range-end",
      day_selected:
        "calendar-day_selected bg-primary text-white rounded-full hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "calendar-day_today bg-accent text-accent-foreground",
      day_outside:
        "calendar-day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      day_disabled: "calendar-day-disabled text-muted-foreground opacity-50",
      day_range_middle:
        "calendar-day_range_middle aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "calendar-day_hidden invisible",
      ...classNames,
    }}
    components={{
      IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
      IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
    }}
    {...props}
  />
);
Calendar.displayName = "Calendar";

export { Calendar };
