"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LogLevel } from "../types/log-event";
import { Field, FieldGroup } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useFilters from "../hooks/use-filters";

export function LogsFilter() {
  const [isOpen, setIsOpen] = useState(true);
  const allLevels: Array<LogLevel> = ["INFO", "WARNING", "CRITICAL"];
  const { toggleFilter, levels } = useFilters();

  const updateFilterState = (level: LogLevel) => {
    toggleFilter(level);
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">Filters</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8 cursor-pointer">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
            <span className="sr-only">Toggle filters</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <FieldGroup className="flex flex-col gap-2">
          {allLevels.map((level) => {
            const name = level.toLowerCase();
            return (
              <Field key={level} orientation="horizontal">
                <Checkbox
                  id={name}
                  name={name}
                  checked={levels.includes(level)}
                  onCheckedChange={() => updateFilterState(level)}
                />
                <Label htmlFor={name} className="capitalize">
                  {name}
                </Label>
              </Field>
            );
          })}
        </FieldGroup>
      </CollapsibleContent>
    </Collapsible>
  );
}
