import React, { useState } from 'react';
import { X, Bell, Inbox, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  const [notifications, setNotifications] = useState([
    {
      id: 'n1',
      group: 'Today',
      title: 'New Client Booking Request',
      message: 'Aarav & Ananya submitted a wedding film inquiry for Lake Pichola, Udaipur.',
      time: '10 mins ago',
      read: false,
      type: 'inquiry',
    },
    {
      id: 'n2',
      group: 'Today',
      title: 'Advance Payment Confirmed',
      message: 'Kabir & Rhea paid advance deposit for Rambagh Palace shoot.',
      time: '2 hours ago',
      read: false,
      type: 'payment',
    },
    {
      id: 'n3',
      group: 'Yesterday',
      title: 'MongoDB Atlas Connected',
      message: 'Database connection verified successfully with Cluster0.',
      time: 'Yesterday at 4:30 PM',
      read: true,
      type: 'system',
    },
    {
      id: 'n4',
      group: 'Earlier',
      title: 'New Story Featured',
      message: 'Echoes of Royalty at Jagmandir Island was set as featured on home page.',
      time: '3 days ago',
      read: true,
      type: 'story',
    },
  ]);

  if (!isOpen) return null;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const grouped = {
    Today: notifications.filter((n) => n.group === 'Today'),
    Yesterday: notifications.filter((n) => n.group === 'Yesterday'),
    Earlier: notifications.filter((n) => n.group === 'Earlier'),
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#121520] border-l border-[#202434] h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-250">
        {/* Header */}
        <div className="p-6 border-b border-[#1E2333] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#C47A65]/15 text-[#C47A65]">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-editorial text-lg text-white font-medium">Studio Alerts</h3>
              <p className="text-[11px] text-slate-400">Activity and client booking updates</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={markAllRead}
              className="text-[11px] font-semibold text-[#C47A65] hover:underline"
            >
              Mark all read
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-[#1A1E2C] border border-[#23283B]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Notifications Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {Object.entries(grouped).map(([group, items]) => {
            if (items.length === 0) return null;
            return (
              <div key={group} className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-2">
                  {group}
                </span>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (item.type === 'inquiry') onNavigateTab('inquiries');
                        if (item.type === 'story') onNavigateTab('stories');
                        if (item.type === 'system') onNavigateTab('settings');
                        onClose();
                      }}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        !item.read
                          ? 'bg-[#171B29] border-[#C47A65]/40 shadow-sm'
                          : 'bg-[#121520] border-[#1E2333] hover:bg-[#161924]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {!item.read && <span className="h-2 w-2 rounded-full bg-[#C47A65]" />}
                            <span className="text-xs font-semibold text-white">{item.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-snug">{item.message}</p>
                          <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 pt-1">
                            <Clock className="h-3 w-3" />
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1E2333] bg-[#0E1017] text-center text-xs text-slate-400">
          CMC Films Studio Notification Center
        </div>
      </div>
    </div>
  );
};
