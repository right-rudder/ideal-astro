import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const cfi = {
  data: {
    title: "Certified Flight Instructor",
    url: "/programs/cfi",
    slug: "cfi",
    siteTitle: "Certified Flight Instructor | Ideal Aviation",
    siteDescription:
      "Our CFI Training program offers you the opportunity to share your knowledge and love for flying with aspiring pilots. As a CFI, you'll play a vital role in shaping the next generation of aviators, and we're here to provide you with the training and support you need to excel in this rewarding role.",
    intro: [
      "Our CFI Training program offers you the opportunity to share your knowledge and love for flying with aspiring pilots. As a CFI, you'll play a vital role in shaping the next generation of aviators, and we're here to provide you with the training and support you need to excel in this rewarding role.",
      "With our experienced team of instructors and comprehensive training curriculum, you'll develop the instructional skills and aviation expertise necessary to guide and inspire future pilots. Join Ideal Aviation's CFI Training program and embark on a fulfilling journey of teaching, mentorship, and professional growth in the dynamic field of aviation.",
    ],
    primaryImage: "/src/assets/images/ideal-cfi-with-private-pilot.webp",
    primaryAlt: "Ideal CFI with private pilot",
    prerequisites: [
      "Hold either a commercial pilot certificate or an airline transport pilot certificate with an instrument rating",
      "Secure a valid FAA 3rd Class Medical Certificate or a higher class",
      "Accumulated at least 250 hours of flight time",
    ],
    steps: [
      {
        title: "Meet Federal Aviation Regulations (FAR) Requirements",
        icon: FaFileMedical,
        description:
          "To become a Certified Flight Instructor (CFI), you must meet the Federal Aviation Regulations (FAR) requirements. These include holding a commercial pilot certificate or an airline transport pilot certificate with an instrument rating, securing a valid FAA 3rd Class Medical Certificate or a higher class, and accumulating at least 250 hours of flight time. Our instructors will guide you through the process of meeting these requirements, ensuring that you are well prepared to begin your CFI training.",
      },
      {
        title: "Complete CFI Ground School",
        icon: FaRegEdit,
        description:
          "Our CFI Ground School provides you with the knowledge and skills needed to become an effective flight instructor. You'll learn about teaching techniques, flight training regulations, and instructional methods that will help you guide and mentor aspiring pilots. With a focus on professionalism and safety, our instructors will equip you with the tools you need to succeed in the dynamic field of aviation instruction.",
      },
      {
        title: "Pass the Fundamentals of Instruction (FOI) Written Exam",
        icon: FaRegPaperPlane,
        description:
          "As part of your CFI training, you'll need to pass the Fundamentals of Instruction (FOI) written exam. This exam covers topics such as learning theory, teaching methods, and human behavior, providing you with a solid foundation in instructional techniques. Our instructors will help you prepare for the exam, ensuring that you have the knowledge and skills needed to pass with confidence.",
      },
    ],
  },
};

export default cfi;
