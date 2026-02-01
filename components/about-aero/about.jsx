"use client"
import React from 'react'
import { motion } from "framer-motion";

export default function AboutH() {
  return (
    <motion.div className="w-screen h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }} >
        <h1 className="font-excon text-8xl font-black text-amber-300">
            About
        </h1>
    </motion.div>
  )
}
