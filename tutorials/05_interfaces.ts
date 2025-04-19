interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  endTrial(isTrialId: string): boolean;
}

// re-opening interfaces, brings inheritance into picture
interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: "admin" | "read-only" | "write-only";
}

const satyam: User = {
  dbId: 1234567890,
  email: "satyamgupta@gmail.com",
  userId: 6473220222,
  googleId: "ab289d-sddddscs43snika-agd2nd",
  startTrial: () => {
    return "Trial started successfully !";
  },
  endTrial: (isTrialId: "abc-e12") => {
    return false;
  },
};

// it simply implies that both type and interfaces works same
// but, re-opening and changing values like here is not possible

export {}