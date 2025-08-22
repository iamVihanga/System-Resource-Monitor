type Statistics = {
  cpuUsage: number;
  ramUsage: number;
  storageUsage: number;
};

type StaticSystemData = {
  totalStorage: number;
  cpuModal: string;
  totalMemoryGB: number;
};

type EventPayloadMapping = {
  statistics: Statistics;
  staticData: StaticSystemData;
};

interface Window {
  electron: {
    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    getStaticData: () => Promise<StaticSystemData>;
  };
}
