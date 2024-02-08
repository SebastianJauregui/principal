const status = {
  ACTIVE: 1,
  INACTIVE: 2,
  PAUSE: 3,
  CLOSED: 4,
  CANCELLED: 5,
  RESCHEDULED: 6,
  REASSIGNED: 7,
  FINALIZED: 8,
  TO_BE_STARTED: 9,
  NOT_FINALIZED: 10,
  RETIRED: 11,
  WAITING: 12,
  REJECTED: 13,
  LOCKED: 14,
  CREATED: 15,
  UPDATED: 16,
  STARTED: 17,
  ANSWERED: 18,
  APPROVED: 19,
  WAIT_FOR_SOLUTION: 20,
  EXPIRED: 21,
  INCOMPLETE: 23,
};

const statusConstsInArray = Object.values(status);

module.exports = { status, statusConstsInArray };
