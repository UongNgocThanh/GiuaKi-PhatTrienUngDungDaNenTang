import React, { useState } from "react";
import { Share } from "@capacitor/share";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Geolocation, PermissionStatus } from "@capacitor/geolocation";
import "./App.css";

const App: React.FC = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  const convertTemperature = async () => {
    const c = parseFloat(celsius);
    if (isNaN(c)) {
      alert("Vui lòng nhập nhiệt độ hợp lệ.");
      return;
    }
    const f = (c * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));

    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Kết quả chuyển đổi",
          body: `Nhiệt độ tương đương: ${f.toFixed(2)}°F`,
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) },
        },
      ],
    });
  };

  const shareTemperature = async () => {
    if (fahrenheit === null) {
      alert("Hãy chuyển đổi nhiệt độ trước khi chia sẻ.");
      return;
    }
    await Share.share({
      title: "Kết quả chuyển đổi nhiệt độ",
      text: `Nhiệt độ ${celsius}°C tương đương ${fahrenheit}°F!`,
      dialogTitle: "Chia sẻ kết quả",
    });
  };

  const getLocation = async () => {
    try {
      const permissionStatus: PermissionStatus = await Geolocation.checkPermissions();
      if (permissionStatus.location !== "granted") {
        const requestStatus = await Geolocation.requestPermissions();
        if (requestStatus.location !== "granted") {
          alert("Bạn chưa cấp quyền truy cập vị trí.");
          return;
        }
      }

      const position = await Geolocation.getCurrentPosition();
      setLocation(`Vĩ độ: ${position.coords.latitude}, Kinh độ: ${position.coords.longitude}`);
    } catch (error) {
      console.error("Lỗi khi lấy vị trí:", error);
      alert("Không thể lấy vị trí: " + (error as Error).message);
    }
  };

  return (
    <div className="App">
      <h1>Chuyển đổi nhiệt độ</h1>
      <div className="input-section">
        <input
          type="number"
          placeholder="Nhập nhiệt độ (°C)"
          value={celsius}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCelsius(e.target.value)}
        />
        <button onClick={convertTemperature}>Chuyển đổi</button>
      </div>

      {fahrenheit !== null && (
        <div className="result-section">
          <p>{celsius}°C = {fahrenheit}°F</p>
          <button onClick={shareTemperature}>Chia sẻ kết quả</button>
        </div>
      )}

      <div className="location-section">
        <button onClick={getLocation}>Lấy vị trí</button>
        {location && <p>{location}</p>}
      </div>
    </div>
  );
};

export default App;
