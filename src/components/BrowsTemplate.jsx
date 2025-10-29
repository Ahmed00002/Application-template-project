import React from "react";
import SectionTitle from "./shared/SectionTitle";
import { Button } from "./ui/button";
import TemplateCard from "./shared/TemplateCard";

const BrowsTemplate = () => {
  const categories = [
    {
      id: 1,
      name: "All",
      description: "Ready templates for various job applications.",
      totalTemplates: 12,
    },
    {
      id: 2,
      name: "Educational",
      description: "School, college & university related forms.",
      totalTemplates: 6,
    },
    {
      id: 3,
      name: "Government",
      description: "Applications for national ID, passport, etc.",
      totalTemplates: 1,
    },
    {
      id: 4,
      name: "Banking",
      description: "Account opening, loan & financial forms.",
      totalTemplates: 2,
    },
    {
      id: 5,
      name: "Personal",
      description: "General purpose applications & personal letters.",
      totalTemplates: 3,
    },
  ];

  const applications = [
    {
      id: 1,
      title: "অফিস সহকারী পদে চাকরির আবেদন",
      category: "Job Application",
      application: `
      <p>বরাবর,<br/>ম্যানেজার,<br/>এক্সওয়াইজেড কোম্পানি লিমিটেড।</p>
      <p><strong>বিষয়:</strong> অফিস সহকারী পদে চাকরির আবেদন।</p>
      <p>জনাব, বিনীত নিবেদন এই যে, আমি আপনার প্রতিষ্ঠানে অফিস সহকারী পদে চাকরির জন্য আবেদন জানাচ্ছি। আমার প্রয়োজনীয় যোগ্যতা ও অভিজ্ঞতা রয়েছে। আপনার সদয় বিবেচনায় আমাকে সুযোগ দিলে কৃতজ্ঞ থাকব।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>ঠিকানা: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Admin",
    },
    {
      id: 2,
      title: "ক্লাসে উপস্থিত থাকতে না পারার জন্য আবেদন",
      category: "Educational",
      application: `
      <p>বরাবর,<br/>অধ্যক্ষ,<br/>ঢাকা পলিটেকনিক ইনস্টিটিউট।</p>
      <p><strong>বিষয়:</strong> ক্লাসে উপস্থিত থাকতে না পারার জন্য আবেদন।</p>
      <p>জনাব, গত কয়েকদিন যাবৎ আমি অসুস্থ থাকায় ক্লাসে উপস্থিত থাকতে পারিনি। এজন্য আপনার নিকট ক্ষমাপ্রার্থী। আগামী সপ্তাহ থেকে নিয়মিত ক্লাসে উপস্থিত থাকব।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>রোল: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Admin",
    },
    {
      id: 3,
      title: "জাতীয় পরিচয়পত্র সংশোধনের আবেদন",
      category: "Government",
      application: `
      <p>বরাবর,<br/>উপজেলা নির্বাহী অফিসার,<br/>সিলেট সদর, সিলেট।</p>
      <p><strong>বিষয়:</strong> জাতীয় পরিচয়পত্র সংশোধনের আবেদন।</p>
      <p>জনাব, আমার জাতীয় পরিচয়পত্রে নাম/জন্মতারিখে ভুল থাকায় সংশোধনের জন্য আবেদন জানাচ্ছি। সংশ্লিষ্ট প্রমাণপত্র সংযুক্ত করা হলো। অনুগ্রহ করে তথ্যটি সংশোধনের ব্যবস্থা নেবেন।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>NID: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Admin",
    },
    {
      id: 4,
      title: "সঞ্চয়ী হিসাব খোলার আবেদন",
      category: "Banking",
      application: `
      <p>বরাবর,<br/>শাখা ব্যবস্থাপক,<br/>জনতা ব্যাংক লিমিটেড।</p>
      <p><strong>বিষয়:</strong> সঞ্চয়ী হিসাব খোলার আবেদন।</p>
      <p>জনাব, আমি আপনার শাখায় একটি সঞ্চয়ী হিসাব খুলতে আগ্রহী। প্রয়োজনীয় তথ্য ও কাগজপত্র সংযুক্ত করা হলো। অনুগ্রহ করে হিসাবটি খোলার অনুমতি প্রদান করবেন।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>ঠিকানা: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Admin",
    },
    {
      id: 5,
      title: "বন্ধুর কাছে ব্যক্তিগত চিঠি",
      category: "Personal",
      application: `
      <p>প্রিয় বন্ধু,</p>
      <p>আশা করি ভালো আছো। আমি সম্প্রতি নতুন একটি প্রজেক্টে কাজ শুরু করেছি, তাই একটু ব্যস্ত আছি। তুমি কেমন আছো? তোমার খবর দিও। শীঘ্রই দেখা হবে ইনশাআল্লাহ।</p>
      <p>তোমার বন্ধু,<br/>___________</p>
    `,
      templateBy: "Numan",
    },
    {
      id: 6,
      title: "ছুটির আবেদনপত্র",
      category: "Educational",
      application: `
      <p>বরাবর,<br/>প্রধান শিক্ষক,<br/>সরকারি উচ্চ বিদ্যালয়।</p>
      <p><strong>বিষয়:</strong> ছুটির আবেদন।</p>
      <p>জনাব, বিনীত নিবেদন এই যে, আমি আগামী দুই দিন অসুস্থ থাকব বলে স্কুলে উপস্থিত থাকতে পারব না। তাই আমাকে দুই দিনের ছুটি দেওয়ার জন্য আবেদন জানাচ্ছি।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>রোল: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Numan",
    },
    {
      id: 7,
      title: "ওয়েব ডেভেলপার পদে চাকরির আবেদন",
      category: "Job Application",
      application: `
      <p>বরাবর,<br/>মানবসম্পদ বিভাগ,<br/>এবিসি আইটি কোম্পানি।</p>
      <p><strong>বিষয়:</strong> ওয়েব ডেভেলপার পদে চাকরির আবেদন।</p>
      <p>জনাব, আমি আপনার প্রতিষ্ঠানে ওয়েব ডেভেলপার পদে আবেদন করছি। আমি React.js এবং Node.js-এ দক্ষ এবং পূর্বে বিভিন্ন প্রজেক্টে কাজের অভিজ্ঞতা রয়েছে। অনুগ্রহ করে আমার আবেদনটি বিবেচনা করবেন।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>মোবাইল: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Numan",
    },
    {
      id: 8,
      title: "চরিত্র সনদ প্রদানের আবেদন",
      category: "Government",
      application: `
      <p>বরাবর,<br/>উপজেলা নির্বাহী অফিসার।</p>
      <p><strong>বিষয়:</strong> চরিত্র সনদ প্রদানের আবেদন।</p>
      <p>জনাব, আমি এই মর্মে জানাচ্ছি যে আমি একজন সুশীল নাগরিক। আমার বিরুদ্ধে কোনো মামলা বা অভিযোগ নেই। অনুগ্রহ করে আমার নামে একটি চরিত্র সনদ প্রদান করার জন্য আবেদন করছি।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>ঠিকানা: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Admin",
    },
    {
      id: 9,
      title: "এটিএম কার্ড হারানোর আবেদন",
      category: "Banking",
      application: `
      <p>বরাবর,<br/>ব্যবস্থাপক,<br/>ইসলামী ব্যাংক লিমিটেড।</p>
      <p><strong>বিষয়:</strong> এটিএম কার্ড হারানোর আবেদন।</p>
      <p>জনাব, বিনীত নিবেদন এই যে, আমার এটিএম কার্ডটি হারিয়ে গেছে। কার্ড নম্বর এবং অ্যাকাউন্ট সংক্রান্ত তথ্য নিচে দেওয়া হলো। অনুগ্রহ করে নতুন কার্ড প্রদানের ব্যবস্থা করবেন।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>অ্যাকাউন্ট নম্বর: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Numan",
    },
    {
      id: 10,
      title: "ক্লাসে অনুপস্থিতির জন্য ক্ষমাপ্রার্থনা",
      category: "Personal",
      application: `
      <p>প্রিয় স্যার,</p>
      <p>আমি আজকের ক্লাসে উপস্থিত থাকতে পারব না কারণ আমার বাসায় জরুরি পারিবারিক সমস্যা দেখা দিয়েছে। এজন্য আন্তরিকভাবে দুঃখ প্রকাশ করছি। পরবর্তী ক্লাসে নিয়মিত উপস্থিত থাকব ইনশাআল্লাহ।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>রোল: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Admin",
    },
    {
      id: 11,
      title: "মার্কশীট পুনঃপ্রাপ্তির আবেদন",
      category: "Educational",
      application: `
      <p>বরাবর,<br/>অধ্যক্ষ,<br/>সিলেট পলিটেকনিক ইনস্টিটিউট।</p>
      <p><strong>বিষয়:</strong> মার্কশীট পুনঃপ্রাপ্তির আবেদন।</p>
      <p>জনাব, আমার ডিপ্লোমা মার্কশীট হারিয়ে গেছে। তাই নতুন একটি কপি প্রদানের জন্য আবেদন জানাচ্ছি। প্রয়োজনীয় তথ্য সংযুক্ত করা হলো।</p>
      <p>বিনীত,<br/>নাম: ___________<br/>রোল: ___________<br/>তারিখ: ___________</p>
    `,
      templateBy: "Numan",
    },
  ];

  return (
    <div>
      <section className="center pt-10 pb-20">
        <SectionTitle
          title={"Brows By Category"}
          subTitle={"Select a category to see more related template"}
        />
        {/* category button */}
        <div className="flex justify-center items-center gap-4 mb-10">
          {categories.map((category) => (
            <Button variant={"outline"} size={"lg"} key={category.id}>
              {category.name} ({category.totalTemplates})
            </Button>
          ))}
        </div>
        {/* Template section */}
        <div className="grid grid-cols-4 gap-6">
          {applications.map((application, index) => (
            <TemplateCard application={application} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowsTemplate;
