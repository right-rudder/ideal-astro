import { FaFileMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const commercialPilot = {
  data: {
    title: "Commercial Pilot",
    url: "/programs/commercial-pilot",
    slug: "commercial-pilot",
    siteTitle: "Commercial Pilot | Ideal Aviation",
    siteDescription:
      "Fly for hire or compensation. If you're looking to make a career out of flying, then getting your commerical pilot certificate is the certificate you need to start getting paid to fly. If you're looking to instruct in the near future, then getting your commerical out of the way and complete one more prerequisite. If you're looking to go to the airlines, fly corporate or charter, or even thinking of something else - Ideal Aviation is here to support you and your goals.",
    intro: [
      "Fly for hire or compensation. If you're looking to make a career out of flying, then getting your commerical pilot certificate is the certificate you need to start getting paid to fly. If you're looking to instruct in the near future, then getting your commerical out of the way and complete one more prerequisite. If you're looking to go to the airlines, fly corporate or charter, or even thinking of something else - Ideal Aviation is here to support you and your goals.",
      "Ideal Aviation is the place in St. Louis to get your commercial certicate. Ideal Aviation is the place for pilots. We're here to support you and help you acheive your aviation goals.",
    ],
    primaryImage: "/src/assets/images/student_pilot_recieves_certificate.webp",
    primaryAlt: "Student pilot recieves certificate",
    prerequisites: [
      "Hold a current private pilot certificate",
      "Have a minimum of 250 hours of flight time, including 100 hours of pilot-in-command time",
      "Obtain a valid FAA 2nd Class Medical Certificate or a higher class",
    ],
    steps: [
      {
        title: "Build the Flight Hours",
        icon: FaFileMedical,
        description:
          "Our program guides you towards amassing the required 250 flight hours, including 100 hours as PIC. With a structured blend of flight training, cross country missions, and solo experiences, you'll gain the necessary hands on exposure to diverse flying conditions, enhancing your skills and building the confidence that defines a seasoned commercial pilot.",
      },
      {
        title: "Pass the Written Exam",
        icon: FaRegEdit,
        description:
          "Our comprehensive curriculum covers a wide spectrum of subjects, from aviation regulations and meteorology to navigation and aerodynamics. Our experienced instructors ensure that you are well equipped to succeed in the written examination. We provide targeted guidance to help you not only pass the test but also acquire a good understanding of necessary aeronautical knowledge.",
      },
      {
        title: "Complete Requirements",
        icon: FaRegPaperPlane,
        description:
          "Achieving your Commercial Pilot Certificate involves fulfilling specific flight requirements, including demanding long cross country flights and other critical experiences. At Ideal Aviation, our commercial program ensures that you master advanced flight maneuvers and precise navigation techniques. With your long cross country flight, you'll demonstrate your ability to plan and execute complex missions, showcasing your aptitude for real world challenges.",
      },
      {
        title: "Pass the Commercial Checkride",
        icon: FaRegPaperPlane,
        description:
          "With a focus on safety and precision, our instructors ensure that you are thoroughly ready for the check ride. As you confidently take to the skies with the examiner, you'll showcase the culmination of your training and the expertise you've gained throughout your journey with Ideal Aviation.",
      },
    ],
  },
};

export default commercialPilot;
