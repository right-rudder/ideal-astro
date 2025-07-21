// Enhanced SEO utility functions for generating structured data

export function generateCourseSchema(courseData) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseData.title,
    description: courseData.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
      logo: "https://idealaviationstl.com/favicon.ico",
      telephone: "(618) 360-7600",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5600 Vector Dr",
        addressLocality: "Sauget",
        addressRegion: "Illinois",
        addressCountry: "US",
        postalCode: "62206",
      },
      accreditedBy: {
        "@type": "Organization",
        name: "Federal Aviation Administration (FAA)",
        url: "https://www.faa.gov",
      },
    },
    educationalCredentialAwarded: courseData.credential || "Pilot Certificate",
    courseMode: ["hands-on", "blended"],
    occupationalCategory: [
      "Aircraft Pilot",
      "Commercial Pilot",
      "Flight Instructor",
    ],
    educationalLevel: "Professional Certificate",
    teaches: courseData.skills || [
      "Flight Operations",
      "Aviation Safety",
      "Aircraft Systems",
      "Navigation",
      "Weather Analysis",
      "Federal Aviation Regulations",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      name: "Aspiring Pilots and Aviation Professionals",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["hands-on", "classroom"],
      courseSchedule: {
        "@type": "Schedule",
        scheduleTimezone: "America/Chicago",
        byDay: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      location: {
        "@type": "Place",
        name: "Ideal Aviation Flight School",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5600 Vector Dr",
          addressLocality: "Sauget",
          addressRegion: "Illinois",
          addressCountry: "US",
          postalCode: "62206",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 38.582148580400556,
          longitude: -90.16273911533945,
        },
      },
      instructor: {
        "@type": "Person",
        name: "Certified Flight Instructors",
        jobTitle: "FAA Certified Flight Instructor",
        worksFor: {
          "@type": "Organization",
          name: "Ideal Aviation",
        },
      },
    },
    offers: {
      "@type": "Offer",
      category: "Education",
      priceCurrency: "USD",
      availability: "InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    timeRequired: courseData.duration || "P60D",
    numberOfCredits: courseData.credits,
    coursePrerequisites: courseData.prerequisites || [
      "Valid Medical Certificate",
      "English Proficiency",
    ],
  };
}

export function generateServiceSchema(serviceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.title,
    description: serviceData.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
      logo: "https://idealaviationstl.com/favicon.ico",
      telephone: "(618) 360-7600",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "28",
      },
    },
    serviceType: "Flight Training",
    category: "Education",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flight Training Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Private Pilot License",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Commercial Pilot License",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Instrument Rating",
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "Place",
        name: "St. Louis Metropolitan Area",
        geo: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 38.582148580400556,
            longitude: -90.16273911533945,
          },
          geoRadius: 150000,
        },
      },
      {
        "@type": "State",
        name: "Illinois",
      },
      {
        "@type": "State",
        name: "Missouri",
      },
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      name:
        serviceData.audience || "Aspiring Pilots and Aviation Professionals",
    },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Ideal Aviation Flight School",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5600 Vector Dr",
            addressLocality: "Sauget",
            addressRegion: "Illinois",
            addressCountry: "US",
            postalCode: "62206",
          },
        },
      },
    ],
  };
}

export function generateBlogPostSchema(postData) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postData.title,
    description: postData.description,
    image: postData.image,
    author: {
      "@type": "Organization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
      logo: "https://idealaviationstl.com/favicon.ico",
    },
    publisher: {
      "@type": "Organization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
      logo: {
        "@type": "ImageObject",
        url: "https://idealaviationstl.com/favicon.ico",
        width: 60,
        height: 60,
      },
    },
    datePublished: postData.publishDate,
    dateModified: postData.modifiedDate || postData.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postData.url,
    },
    about: {
      "@type": "Thing",
      name: "Aviation Training",
    },
    keywords: postData.keywords || "flight training, aviation, pilot education",
    articleSection: "Aviation Education",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: "Ideal Aviation News",
      url: "https://idealaviationstl.com/news",
    },
  };
}

export function generatePersonSchema(personData) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personData.name,
    jobTitle: personData.jobTitle || "Certified Flight Instructor",
    worksFor: {
      "@type": "Organization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
    },
    hasCredential:
      personData.certifications?.split(", ").map((cert) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Certification",
        name: cert,
        recognizedBy: {
          "@type": "Organization",
          name: "Federal Aviation Administration",
          url: "https://www.faa.gov",
        },
      })) || [],
    knowsAbout: [
      "Flight Training",
      "Aviation Safety",
      "Aircraft Operations",
      "Federal Aviation Regulations",
    ],
    image: personData.image,
    colleague: "https://idealaviationstl.com/about/our-team",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "Ideal Aviation",
    alternateName: ["Ideal Aviation Flight School", "Ideal Aviation St. Louis"],
    url: "https://idealaviationstl.com",
    logo: "https://idealaviationstl.com/favicon.ico",
    image: "https://idealaviationstl.com/twin_outside.webp",
    description:
      "Premier FAA-approved Part 141 flight school in St. Louis offering comprehensive pilot training programs for helicopter and fixed-wing aircraft.",
    telephone: "(618) 360-7600",
    email: "info@idealaviationstl.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5600 Vector Dr",
      addressLocality: "Sauget",
      addressRegion: "Illinois",
      addressCountry: "US",
      postalCode: "62206",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.582148580400556,
      longitude: -90.16273911533945,
    },
    areaServed: [
      {
        "@type": "State",
        name: "Illinois",
      },
      {
        "@type": "State",
        name: "Missouri",
      },
      {
        "@type": "City",
        name: "St. Louis",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Bill Macon",
      jobTitle: "CEO and Founder",
    },
    employee: [
      {
        "@type": "Person",
        name: "Jim Moseley",
        jobTitle: "Chief Flight Instructor / Director of Operations",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Aircraft Owners and Pilots Association",
        url: "https://www.aopa.org",
      },
    ],
    accreditedBy: {
      "@type": "Organization",
      name: "Federal Aviation Administration",
      url: "https://www.faa.gov",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Part 141 Certification",
      name: "FAA Part 141 Pilot School Certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Federal Aviation Administration",
      },
    },
    offers: [
      {
        "@type": "Course",
        name: "Private Pilot License",
        description: "Complete private pilot training program",
      },
      {
        "@type": "Course",
        name: "Commercial Pilot License",
        description: "Professional pilot certification program",
      },
      {
        "@type": "Course",
        name: "Instrument Rating",
        description: "Instrument flight rules certification",
      },
      {
        "@type": "Course",
        name: "Helicopter Pilot Training",
        description: "Rotary-wing pilot certification",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "28",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/IdealAviation",
      "https://www.instagram.com/idealaviation/",
      "https://www.tiktok.com/@idealaviationstl",
      "https://www.youtube.com/@idealaviation9390",
    ],
  };
}

export function generateFleetSchema(fleetData) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${fleetData.type} Fleet - Ideal Aviation`,
    description: `Modern ${fleetData.type.toLowerCase()} aircraft fleet for professional flight training`,
    numberOfItems: fleetData.aircraft?.length || 0,
    itemListElement:
      fleetData.aircraft?.map((aircraft, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Vehicle",
          name: aircraft.name,
          model: aircraft.model,
          manufacturer: aircraft.manufacturer,
          vehicleConfiguration: aircraft.type,
          description: aircraft.description,
          owner: {
            "@type": "Organization",
            name: "Ideal Aviation",
          },
          usage: "Flight Training",
          location: {
            "@type": "Place",
            name: "Ideal Aviation Flight School",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5600 Vector Dr",
              addressLocality: "Sauget",
              addressRegion: "Illinois",
              addressCountry: "US",
              postalCode: "62206",
            },
          },
        },
      })) || [],
    provider: {
      "@type": "EducationalOrganization",
      name: "Ideal Aviation",
    },
  };
}

export function generateTeamSchema(teamData) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flight Instructors - Ideal Aviation",
    description: "Professional certified flight instructors at Ideal Aviation",
    numberOfItems: teamData.length,
    itemListElement: teamData.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: "Certified Flight Instructor",
        worksFor: {
          "@type": "Organization",
          name: "Ideal Aviation",
          url: "https://idealaviationstl.com",
        },
        hasCredential:
          member.certifications?.split(", ").map((cert) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Certification",
            name: cert,
            recognizedBy: {
              "@type": "Organization",
              name: "Federal Aviation Administration",
              url: "https://www.faa.gov",
            },
          })) || [],
        knowsAbout: [
          "Flight Training",
          "Aviation Safety",
          "Aircraft Operations",
          "Federal Aviation Regulations",
        ],
        image: member.image,
        colleague: "https://idealaviationstl.com/about/our-team",
      },
    })),
  };
}

export function generateVideoSchema(videoData) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoData.title,
    description: videoData.description,
    thumbnailUrl: videoData.thumbnail,
    uploadDate: videoData.uploadDate,
    duration: videoData.duration,
    embedUrl: videoData.embedUrl,
    publisher: {
      "@type": "Organization",
      name: "Ideal Aviation",
      logo: "https://idealaviationstl.com/favicon.ico",
    },
    contentUrl: videoData.contentUrl,
    about: {
      "@type": "Thing",
      name: "Flight Training",
    },
    keywords:
      videoData.keywords || "flight training, aviation, pilot education",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebPage",
      url: videoData.pageUrl,
    },
  };
}

export function generateNewsArticleSchema(articleData) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleData.title,
    description: articleData.description,
    image: articleData.image,
    author: {
      "@type": "Organization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
      logo: {
        "@type": "ImageObject",
        url: "https://idealaviationstl.com/favicon.ico",
        width: 60,
        height: 60,
      },
    },
    datePublished: articleData.publishDate,
    dateModified: articleData.modifiedDate || articleData.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleData.url,
    },
    about: [
      {
        "@type": "Thing",
        name: "Aviation Training",
      },
      {
        "@type": "Thing",
        name: "Flight Education",
      },
    ],
    keywords:
      articleData.keywords || "flight training, aviation, pilot education",
    articleSection: "Aviation Education",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: "Ideal Aviation News",
      url: "https://idealaviationstl.com/news",
    },
  };
}

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `https://idealaviationstl.com${item.href}` : undefined,
    })),
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Ideal Aviation",
    description:
      "Contact information for Ideal Aviation flight school in St. Louis",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Ideal Aviation",
      telephone: "(618) 360-7600",
      email: "info@idealaviationstl.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5600 Vector Dr",
        addressLocality: "Sauget",
        addressRegion: "Illinois",
        addressCountry: "US",
        postalCode: "62206",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.582148580400556,
        longitude: -90.16273911533945,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
      ],
    },
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ideal Aviation",
    description:
      "Learn about Ideal Aviation's mission, story, and commitment to excellence in flight training",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Ideal Aviation",
      founder: {
        "@type": "Person",
        name: "Bill Macon",
        jobTitle: "CEO and Founder",
      },
      foundingDate: "2011",
      mission:
        "Providing exceptional flight training with a focus on safety, professionalism, and excellence",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "FAA Part 141 Pilot School Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Federal Aviation Administration",
          },
        },
      ],
    },
  };
}

export function generateOptimizedTitle(baseTitle, location = "St. Louis") {
  // Ensure title is under 60 characters for optimal SEO
  if (baseTitle.includes("Ideal Aviation")) {
    return baseTitle;
  }

  const suffix = " | Ideal Aviation";
  const maxLength = 60 - suffix.length;

  if (baseTitle.length <= maxLength) {
    return baseTitle + suffix;
  }

  return baseTitle.substring(0, maxLength).trim() + suffix;
}

export function generateOptimizedDescription(
  baseDescription,
  location = "St. Louis",
) {
  // Ensure description is 150-160 characters for optimal SEO
  const maxLength = 155;

  if (baseDescription.length <= maxLength) {
    return baseDescription;
  }

  // Try to cut at a word boundary
  const truncated = baseDescription.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength - 20) {
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
}

export function generateCourseCatalogSchema(programs) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Flight Training Programs",
    description:
      "Comprehensive flight training programs for both fixed-wing and rotary-wing aircraft at Ideal Aviation",
    provider: {
      "@type": "EducationalOrganization",
      name: "Ideal Aviation",
      url: "https://idealaviationstl.com",
      logo: "https://idealaviationstl.com/favicon.ico",
      telephone: "(618) 360-7600",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5600 Vector Dr",
        addressLocality: "Sauget",
        addressRegion: "Illinois",
        addressCountry: "US",
        postalCode: "62206",
      },
    },
    hasCourseInstance: programs.map((program) => ({
      "@type": "CourseInstance",
      name: program.data.title,
      description: program.data.siteDescription || program.data.intro?.[0],
      url: `https://idealaviationstl.com${program.data.url}`,
      courseMode: ["hands-on", "classroom"],
      courseSchedule: {
        "@type": "Schedule",
        scheduleTimezone: "America/Chicago",
        byDay: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      location: {
        "@type": "Place",
        name: "Ideal Aviation Flight School",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5600 Vector Dr",
          addressLocality: "Sauget",
          addressRegion: "Illinois",
          addressCountry: "US",
          postalCode: "62206",
        },
      },
      instructor: {
        "@type": "Person",
        name: "Certified Flight Instructors",
        jobTitle: "FAA Certified Flight Instructor",
      },
      coursePrerequisites: program.data.prerequisites || [
        "Valid Medical Certificate",
        "English Proficiency",
      ],
    })),
    educationalCredentialAwarded: "Pilot Certificate",
    competencyRequired: [
      "Aircraft Operation",
      "Navigation",
      "Weather Interpretation",
      "Federal Aviation Regulations",
      "Emergency Procedures",
    ],
    teaches: [
      "Flight Operations",
      "Aviation Safety",
      "Aircraft Systems",
      "Navigation Procedures",
      "Weather Analysis",
    ],
  };
}
