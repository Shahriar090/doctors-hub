import React from 'react';

const WorkingHour = () => {
    return (
        <div className=" working-hour w-80 mx-auto lg:mx-0 lg:w-full lg:h-full overflow-y-auto  bg-gradient-to-r from-cyan-500 to-cyan-700 text-white rounded-lg">
        <h1 className="text-2xl text-center m-2 font-bold">Working Hours</h1>
        
        <p className="text-center text-sm p-3 lg:p-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat.
        </p>

        <div className="m-4">
          <span className="divider"></span>

          <div className="flex justify-between">
            <div className="day font-bold">Mon</div>
            <div className="time">8:00 AM – 2:30 PM</div>
          </div>
          <span className="divider"></span>
          <div className="flex justify-between">
            <div className="day font-bold">Tue</div>
            <div className="time">8:00 AM – 7:00 PM</div>
          </div>
          <span className="divider"></span>
          <div className="flex justify-between">
            <div className="day font-bold">Wed</div>
            <div className="time">8:00 AM – 7:00 PM</div>
          </div>
          <span className="divider"></span>
          <div className="flex justify-between">
            <div className="day font-bold">Thu</div>
            <div className="time">8:00 AM – 7:00 PM</div>
          </div>
          <span className="divider"></span>
          <div className="flex justify-between">
            <div className="day font-bold">Fri</div>
            <div className="time">8:00 AM – 2:30 PM</div>
          </div>
          <span className="divider"></span>
          <div className="flex justify-between">
            <div className="day font-bold">Sat</div>
            <div className="time">Closed</div>
          </div>
          <span className="divider"></span>
          <div className="flex justify-between">
            <div className="day font-bold">Sun</div>
            <div className="time">Closed</div>
          </div>
        </div>
      </div>
    );
};

export default WorkingHour;