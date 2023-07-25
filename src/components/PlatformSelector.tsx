import React from "react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: string) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data, isLoading, error } = usePlatforms();

  return (
    <div>
      <select
        name="platforms"
        id="select-platforms"
        className="bg-gray-800 text-white p-[8px] rounded-sm ml-[25px]"
        onChange={() => {
          let selected = (
            document.getElementById("select-platforms") as HTMLInputElement
          ).value;
          onSelectedPlatform(selected);
        }}
      >
        <option value="">Platforms</option>;
        {data.map((platform) => {
          return (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PlatformSelector;
