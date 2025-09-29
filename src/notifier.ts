export abstract class Notifier {
  abstract notify(message: string): void;
}

export class SMSNotifier extends Notifier {
  private smsService: SMSService;

  constructor(smsService: SMSService) {
    super();
    this.smsService = smsService;
  }

  public notify(message: string) {
    const shortMessage = message.substring(0, 50);
    this.smsService.submit(shortMessage);
    console.log(`[SMS SUBMITTED] ... : "${shortMessage}..."`);
  }
}

interface SMSService {
  submit(message: string): boolean;
}

class TwilioSMSService implements SMSService {
  submit(message: string): boolean {
    console.log(`[SMS - Twilio] Msg submitted: ${message.substring(0, 30)}...`);
    return true;
  }
}
