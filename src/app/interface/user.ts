export interface User {
  id: string;
  name: string;
  contractPeriod: {
    start: Date;
    end: Date;
  };
  adjustment: string;
  projectLocation: string;
  supervisor: string;
  funnelGenId: string;
  pendingSO: boolean;
  so: string;
  soIdc: string;
  renewalStatus: "Waiting Approval" | "Approved" | "Rejected";
}
