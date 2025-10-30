import VideoPlayer from "@/app/components/videoPlayer";

interface Feature {
  title: string;
  description: string;
  videoUrl: string;
}

const features: Feature[] = [
  {
    title: "Notes",
    description:
      "Notes are displayed in grid. You can delete, edit, expand, and move your note to a notebook.",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812196/WiseNotes/1_WiseNotes_NotesFunctionality_dsao03.mp4",
  },
  {
    title: "Adding New Note",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812119/WiseNotes/2_WiseNotes_NewNote_dmvb8r.mp4",
  },
  {
    title: "Notebooks",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812189/WiseNotes/5_WiseNotes_Notebook_ves5cw.mp4",
  },
  {
    title: "Bin",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812184/WiseNotes/6_WiseNotes_Bin_tlpwsg.mp4",
  },
  {
    title: "Ask AI",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812209/WiseNotes/7_WiseNotes_AskAI_Functionality_pvnz0m.mp4",
  },
];

const userInterfaceFeatures: Feature[] = [
  {
    title: "Infinite Scrolling",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812046/WiseNotes/3_WiseNotes_Pagination_msux3n.mp4",
  },
  {
    title: "Drag & Drop",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812121/WiseNotes/4_WiseNotes_DragAndDrop_yn0bfj.mp4",
  },
  {
    title: "View Switching",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812097/WiseNotes/8_WiseNotes_ViewSwitching_fnti5l.mp4",
  },
  {
    title: "Dark Mode",
    description: "",
    videoUrl: "https://res.cloudinary.com/dg0cwy8vx/video/upload/v1761812037/WiseNotes/9_WiseNotes_LightAndDarkMode_s8zg5e.mp4",
  },
];

function FeatureTemplate({
  title,
  description,
  videoUrl,
}: {
  title: string;
  description: string;
  videoUrl: string;
}) {
  return (
    <div>
      <div className="mb-8">
        <p className="text-xl font-bold mb-2">{title}</p>
        <p className="text-neutral-500">{description}</p>
      </div>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
}

export default function Features() {
  return (
    <>
      <p className="text-center text-3xl font-bold mb-32">FEATURES</p>
      <div className="flex flex-col gap-16">
        {features.map((feature, index) => (
          <FeatureTemplate
            key={index}
            title={feature.title}
            description={feature.description}
            videoUrl={feature.videoUrl}
          />
        ))}
        <p className="font-bold text-2xl">USER INTERFACE</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {userInterfaceFeatures.map((feature, index) => (
            <FeatureTemplate
              key={index}
              title={feature.title}
              description={feature.description}
              videoUrl={feature.videoUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
