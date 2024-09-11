// ---------- CONFIG. MODULE ---------- \\
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidV4 } from 'uuid';

// ---------- CONFIG. SPECIFICATION ---------- \\
class Specification {
  id?: string;
  description: string;
  created_at: Date;

  // ---------- CONFIG. CONSTRUCTOR ---------- \\
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

// ---------- EXPORT SPECIFICATION ---------- \\
export { Specification };
