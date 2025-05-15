"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-9 w-9 rounded-full bg-background hover:bg-muted transition-colors"
        >
          <motion.div
            initial={false}
            animate={{
              scale: theme === "dark" ? 0 : 1,
              rotate: theme === "dark" ? -90 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun className="h-4 w-4 text-primary hover:text-primary/80 transition-colors" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              scale: theme === "dark" ? 1 : 0,
              rotate: theme === "dark" ? 0 : 90,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="h-4 w-4 text-primary hover:text-primary/80 transition-colors" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[130px] animate-in fade-in-0 zoom-in-95">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && (
            <motion.div
              layoutId="theme-indicator"
              className="ml-auto h-1 w-1 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && (
            <motion.div
              layoutId="theme-indicator"
              className="ml-auto h-1 w-1 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
          {theme === "system" && (
            <motion.div
              layoutId="theme-indicator"
              className="ml-auto h-1 w-1 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
