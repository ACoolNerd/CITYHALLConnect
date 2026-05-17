import { publicMeetings } from "../../data/appData";
import { Calendar, MapPin, FileText } from "lucide-react";

export default function MeetingTracker() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-white">Upcoming Public Meetings</h3>
        <p className="text-sm text-neutral-500">Stay informed on local government decision-making.</p>
      </div>

      <div className="flex flex-col gap-4">
        {publicMeetings.map(meeting => (
          <div key={meeting.id} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-bold text-white">{meeting.title}</h4>
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(meeting.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {meeting.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {meeting.agenda.map(item => (
                  <span key={item} className="px-2 py-1 rounded bg-black border border-neutral-800 text-[10px] text-neutral-500 uppercase tracking-tighter">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button className="w-full md:w-auto px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center gap-2">
                <FileText className="w-4 h-4" /> View Agenda
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
