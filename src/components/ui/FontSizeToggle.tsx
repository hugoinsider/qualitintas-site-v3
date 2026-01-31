"use client";

import * as React from "react";
import { Type } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FontSizeToggle() {
    const [fontSize, setFontSize] = React.useState(100);

    const adjustFontSize = (adjustment: number) => {
        const newSize = Math.min(Math.max(fontSize + adjustment, 80), 130);
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}%`;
    };

    return (
        <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-800 rounded-md p-0.5 bg-white dark:bg-slate-950">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => adjustFontSize(-10)}
                className="h-8 w-8 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
                disabled={fontSize <= 80}
                title="Diminuir Fonte"
            >
                <span className="text-xs">A-</span>
            </Button>

            <div className="flex items-center justify-center w-8 h-8 cursor-default">
                <Type className="h-4 w-4" />
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={() => adjustFontSize(10)}
                className="h-8 w-8 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                disabled={fontSize >= 130}
                title="Aumentar Fonte"
            >
                <span className="text-lg">A+</span>
            </Button>
        </div>
    );
}
