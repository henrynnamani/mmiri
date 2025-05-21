import { TypingAnimation } from "@/components/magicui/typing-animation";

const Feature = () => {
  return (
    <div className='w-full pt-20 text-center gap-5 flex flex-col'>
        <div className='flex flex-col'>
            <span className="text-4xl font-medium">Odogwu <span className="text-lg">et</span> Achalugo</span>
            <TypingAnimation style={{ fontSize: 20, fontStyle: 'normal', fontWeight: 400 }}>Maintain your steeze while we handle your water need.</TypingAnimation>
        </div>
    </div>
  )
}

export default Feature
