import React from 'react'

interface GradientNoiseProps {
    magnitude?: number // Opacity of the noise texture (0-1)
    decayRate?: number // Intensity/Opacity of the gradient blobs (0-1)
    baseColor?: string // Tailwind color class for the blobs (default: bg-bee-gold)
}

export const GradientNoise = ({ 
    magnitude = 0.05, 
    decayRate = 1.0,
    baseColor = 'bg-bee-gold' 
}: GradientNoiseProps) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Noise Texture */}
            <div 
                className="absolute inset-0 bg-[url('/noise.svg')] mix-blend-overlay"
                style={{ opacity: magnitude }}
            ></div>

            {/* Gradient Blobs - Simulating "Gradient Noise" */}
            <div 
                className={`absolute -top-[20%] -right-[10%] w-[80%] h-[80%] ${baseColor}/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen`}
                style={{ opacity: decayRate * 0.6 }}
            ></div>
            
            <div 
                className={`absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] ${baseColor}/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen`}
                style={{ opacity: decayRate * 0.4 }}
            ></div>
        </div>
    )
}
